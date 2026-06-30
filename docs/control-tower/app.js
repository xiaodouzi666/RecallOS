const snapshot = window.RECALLOS_SNAPSHOT;
let selectedDecisionId = snapshot.selectedDecisionId;
let activeTab = "Blast Radius";

const tabs = [
  "Blast Radius",
  "DBOM",
  "Dependency Graph",
  "Replay Results",
  "Risk & Exposure",
  "Remediation Plan",
  "Evidence Chain",
  "Human Review",
  "Certificate",
];

const tones = ["blue", "teal", "amber", "red", "green", "violet"];

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function formatOutcome(value) {
  return String(value).replaceAll("_", " ");
}

function selectedRow() {
  return snapshot.affectedDecisions.find((row) => row.decisionId === selectedDecisionId);
}

function selectedDbom() {
  return snapshot.dbomsByDecision[selectedDecisionId];
}

function renderStatusStrip() {
  const items = [
    ["Case", snapshot.summary.caseStatus],
    ["Verification", snapshot.summary.verification],
    ["Recall ID", snapshot.summary.recallId],
    ["Track", "UiPath Maestro Case"],
  ];
  document.getElementById("status-strip").innerHTML = items
    .map(([label, value]) => `<div class="status-chip"><span>${label}</span><strong>${escapeHtml(value)}</strong></div>`)
    .join("");
}

function renderMetrics() {
  const metrics = [
    ["Total Scanned", snapshot.summary.totalScanned, "Decision records scanned", "blue"],
    ["Affected", snapshot.summary.affectedCount, "Used credit-policy-v7.1", "teal"],
    ["Changed", snapshot.summary.changedOutcomeCount, "Different under corrected policy", "amber"],
    ["High Risk", snapshot.summary.highRiskCount, "Harmful auto-rejections", "red"],
    ["Customer Facing", snapshot.summary.customerFacingHighRiskCount, "Immediate reopen cases", "violet"],
    ["Remediation", `${snapshot.summary.remediationCompleted}/${snapshot.summary.remediationTotal}`, "Actions completed", "green"],
    ["Manifest", snapshot.summary.manifestHash, "Evidence chain hash", "blue"],
    ["Exposure", `EUR ${snapshot.summary.potentialExposure.toLocaleString("en-US")}`, "Changed-case requested amount", "amber"],
  ];
  document.getElementById("metric-grid").innerHTML = metrics
    .map(
      ([label, value, hint, tone]) => `
      <article class="metric" data-tone="${tone}">
        <span>${label}</span>
        <strong>${value}</strong>
        <small>${hint}</small>
      </article>`
    )
    .join("");
}

function renderFunnel() {
  const values = [
    ["Scanned", snapshot.summary.totalScanned, "#2764d9"],
    ["Affected", snapshot.summary.affectedCount, "#08847f"],
    ["Changed", snapshot.summary.changedOutcomeCount, "#b86b00"],
    ["Customer-facing", snapshot.summary.customerFacingHighRiskCount, "#6b4acb"],
    ["Verified", snapshot.summary.verification === "passed" ? snapshot.summary.customerFacingHighRiskCount : 0, "#147a43"],
  ];
  const max = Math.max(...values.map(([, value]) => Number(value)));
  const bars = values
    .map(([label, value, color], index) => {
      const width = Math.max(42, (Number(value) / max) * 520);
      const y = 18 + index * 40;
      return `
        <g>
          <text x="8" y="${y + 20}" font-size="12" font-weight="700" fill="#667085">${label}</text>
          <rect x="128" y="${y}" width="${width}" height="24" rx="5" fill="${color}"></rect>
          <text x="${136 + width}" y="${y + 17}" font-size="12" font-weight="800" fill="#18222f">${value}</text>
        </g>`;
    })
    .join("");
  document.getElementById("funnel-chart").innerHTML = `
    <svg viewBox="0 0 720 230" role="img" aria-label="Recall funnel chart">${bars}</svg>`;
}

function renderTimeline() {
  document.getElementById("timeline").innerHTML = snapshot.case.timeline
    .map(
      (entry) => `
      <li class="${escapeHtml(entry.status)}">
        <strong>${escapeHtml(entry.stage)}</strong>
        ${escapeHtml(entry.note)}
      </li>`
    )
    .join("");
}

function renderTabs() {
  document.getElementById("tabs").innerHTML = tabs
    .map(
      (tab) => `
      <button class="tab" aria-selected="${tab === activeTab}" type="button" data-tab="${tab}">
        ${tab}
      </button>`
    )
    .join("");
  document.querySelectorAll(".tab").forEach((button) => {
    button.addEventListener("click", () => {
      activeTab = button.dataset.tab;
      render();
    });
  });
}

function renderDecisionTable(rows, filterChanged = false) {
  const bodyRows = rows
    .filter((row) => !filterChanged || row.changed)
    .map(
      (row) => `
      <tr data-decision="${row.decisionId}" data-selected="${row.decisionId === selectedDecisionId}">
        <td><strong>${row.decisionId}</strong><br><span>${row.applicationId}</span></td>
        <td>${escapeHtml(row.companyName)}</td>
        <td>EUR ${row.monthlyRevenue.toLocaleString("en-US")}</td>
        <td>${escapeHtml(row.guaranteeType)}</td>
        <td>${formatOutcome(row.originalOutcome)}</td>
        <td>${formatOutcome(row.correctedOutcome)}</td>
        <td><span class="pill ${row.riskBand || row.severity}">${row.riskScore ?? row.severity}</span></td>
      </tr>`
    )
    .join("");
  return `
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Decision</th>
            <th>Company</th>
            <th>Revenue</th>
            <th>Guarantee</th>
            <th>Original</th>
            <th>Replay</th>
            <th>Risk score</th>
          </tr>
        </thead>
        <tbody>${bodyRows}</tbody>
      </table>
    </div>`;
}

function attachRowHandlers() {
  document.querySelectorAll("tr[data-decision]").forEach((row) => {
    row.addEventListener("click", () => {
      selectedDecisionId = row.dataset.decision;
      if (activeTab === "Blast Radius") {
        renderBlastRadius();
      } else {
        render();
      }
    });
  });
}

function renderDecisionDetail() {
  const row = selectedRow();
  const dbom = selectedDbom();
  return `
    <aside class="detail">
      <h3>${row.decisionId} Evidence</h3>
      <dl class="kv">
        <dt>Application</dt><dd>${row.applicationId}</dd>
        <dt>Applicant</dt><dd>${row.applicantId}</dd>
        <dt>Original outcome</dt><dd>${formatOutcome(row.originalOutcome)}</dd>
        <dt>Replay outcome</dt><dd>${formatOutcome(row.correctedOutcome)}</dd>
        <dt>Risk score</dt><dd>${row.riskScore} (${row.riskBand})</dd>
        <dt>Risk drivers</dt><dd>${escapeHtml((row.riskDrivers || []).join(", "))}</dd>
        <dt>CRM</dt><dd>${escapeHtml(row.crmStatus)}</dd>
        <dt>Ticket</dt><dd>${escapeHtml(row.ticketStatus)}</dd>
        <dt>Email</dt><dd>${escapeHtml(row.emailStatus)}</dd>
        <dt>Evidence</dt><dd>${escapeHtml(dbom.evidenceReferences.join(", "))}</dd>
      </dl>
      <p>${escapeHtml(row.reason)}</p>
    </aside>`;
}

function renderDependencyGraph() {
  const graph = snapshot.dependencyGraph;
  const nodes = [
    ["credit-policy-v7.1", 40, 70, "#be3b35"],
    ["prompt-2026-05-19", 270, 35, "#6b4acb"],
    ["loan-eligibility-agent-v2.3", 500, 70, "#2764d9"],
    ["affected-decisions", 745, 70, "#08847f"],
    ["changed-outcomes", 970, 35, "#b86b00"],
    ["customer-facing", 970, 135, "#147a43"],
    ["DEC-2026-00421", 270, 185, "#be3b35"],
    ["APP-1042", 500, 185, "#147a43"],
  ];
  const nodeSvg = nodes
    .map(([id, x, y, color]) => {
      const node = graph.nodes.find((item) => item.id === id);
      return `
        <g>
          <rect x="${x}" y="${y}" width="190" height="58" rx="7" fill="#fff" stroke="${color}" stroke-width="2"></rect>
          <text x="${Number(x) + 12}" y="${Number(y) + 24}" font-size="12" font-weight="800" fill="${color}">${escapeHtml(node?.type || id)}</text>
          <text x="${Number(x) + 12}" y="${Number(y) + 43}" font-size="12" fill="#18222f">${escapeHtml(node?.label || id).slice(0, 28)}</text>
        </g>`;
    })
    .join("");
  const edgeRows = graph.edges
    .map(
      (edge) => `<tr><td>${escapeHtml(edge.from)}</td><td>${escapeHtml(edge.relationship)}</td><td>${escapeHtml(edge.to)}</td></tr>`
    )
    .join("");
  document.getElementById("view").innerHTML = `
    <section class="detail">
      <h2>Decision Dependency Graph</h2>
      <p>Faulty AI component lineage connected to affected decisions and downstream business impact.</p>
      <svg class="dependency-graph" viewBox="0 0 1200 300" role="img" aria-label="Recall dependency graph">
        <defs>
          <marker id="dep-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#9aa4b2"></path>
          </marker>
        </defs>
        <path d="M230 99 H267 M460 99 H497 M690 99 H742 M935 99 H967" stroke="#9aa4b2" stroke-width="2" marker-end="url(#dep-arrow)"></path>
        <path d="M1065 93 V135" stroke="#9aa4b2" stroke-width="2" marker-end="url(#dep-arrow)"></path>
        <path d="M135 128 C160 210 210 214 267 214 M460 214 H497" stroke="#9aa4b2" stroke-width="2" marker-end="url(#dep-arrow)" fill="none"></path>
        ${nodeSvg}
      </svg>
    </section>
    <div class="table-wrap">
      <table>
        <thead><tr><th>From</th><th>Relationship</th><th>To</th></tr></thead>
        <tbody>${edgeRows}</tbody>
      </table>
    </div>`;
}

function renderBlastRadius() {
  document.getElementById("view").innerHTML = `
    <div class="split">
      <div>
        <div class="section-head">
          <h2>Affected Decisions</h2>
          <p>${snapshot.summary.affectedCount} decisions matched credit-policy-v7.1.</p>
        </div>
        ${renderDecisionTable(snapshot.affectedDecisions)}
      </div>
      ${renderDecisionDetail()}
    </div>`;
  attachRowHandlers();
}

function renderDbomGraph() {
  const dbom = selectedDbom();
  const nodes = [
    ["Agent", dbom.decisionIngredients.agent.version, 45, 58, "#2764d9"],
    ["Prompt", dbom.decisionIngredients.prompt.id, 240, 26, "#6b4acb"],
    ["Policy", dbom.decisionIngredients.policy.id, 240, 92, "#be3b35"],
    ["Inputs", "revenue + guarantee + risk", 435, 58, "#08847f"],
    ["Outcome", selectedRow().correctedOutcome, 610, 58, "#147a43"],
  ];
  const nodeSvg = nodes
    .map(
      ([label, detail, x, y, color]) => `
      <g>
        <rect x="${x}" y="${y}" width="150" height="48" rx="7" fill="#fff" stroke="${color}" stroke-width="2"></rect>
        <text x="${Number(x) + 10}" y="${Number(y) + 18}" font-size="12" font-weight="800" fill="${color}">${label}</text>
        <text x="${Number(x) + 10}" y="${Number(y) + 36}" font-size="11" fill="#18222f">${escapeHtml(detail).slice(0, 28)}</text>
      </g>`
    )
    .join("");
  return `
    <svg class="dbom-graph" viewBox="0 0 780 180" role="img" aria-label="Decision Bill of Materials graph">
      <path d="M195 82 H238 M390 82 H432 M585 82 H608" stroke="#9aa4b2" stroke-width="2" marker-end="url(#arrow)"></path>
      <path d="M315 74 V92" stroke="#9aa4b2" stroke-width="2"></path>
      <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#9aa4b2"></path>
        </marker>
      </defs>
      ${nodeSvg}
    </svg>`;
}

function renderDbom() {
  const dbom = selectedDbom();
  const inputs = dbom.decisionIngredients.dataInputs;
  document.getElementById("view").innerHTML = `
    <div class="split">
      <div class="detail">
        <h2>${dbom.dbomId}</h2>
        <p>Decision Bill of Materials for ${dbom.decisionId}</p>
        ${renderDbomGraph()}
        <dl class="kv">
          <dt>Faulty matched</dt><dd>${dbom.faultyComponentMatched}</dd>
          <dt>Policy hash</dt><dd>${escapeHtml(dbom.decisionIngredients.policy.hash)}</dd>
          <dt>Prompt hash</dt><dd>${escapeHtml(dbom.decisionIngredients.prompt.hash)}</dd>
          <dt>Model</dt><dd>${escapeHtml(dbom.decisionIngredients.model)}</dd>
          <dt>Retrieval index</dt><dd>${escapeHtml(dbom.decisionIngredients.retrievalIndex)}</dd>
          <dt>Tool calls</dt><dd>${escapeHtml(dbom.decisionIngredients.toolCalls.join(", "))}</dd>
        </dl>
      </div>
      <aside class="detail">
        <h3>Decision Inputs</h3>
        <dl class="kv">
          <dt>Monthly revenue</dt><dd>EUR ${inputs.monthlyRevenue.toLocaleString("en-US")}</dd>
          <dt>Guarantee</dt><dd>${escapeHtml(inputs.guaranteeType)}</dd>
          <dt>Company age</dt><dd>${inputs.companyAgeMonths} months</dd>
          <dt>Risk score</dt><dd>${inputs.riskScore}</dd>
          <dt>Email sent</dt><dd>${dbom.downstreamImpact.emailSent}</dd>
          <dt>CRM closed</dt><dd>${dbom.downstreamImpact.crmClosed}</dd>
          <dt>Ticket closed</dt><dd>${dbom.downstreamImpact.ticketClosed}</dd>
        </dl>
      </aside>
    </div>`;
}

function renderReplay() {
  document.getElementById("view").innerHTML = `
    <div class="split">
      <div>
        <div class="section-head">
          <h2>Changed Outcomes</h2>
          <p>${snapshot.summary.changedOutcomeCount} historical decisions changed under credit-policy-v7.2.</p>
        </div>
        ${renderDecisionTable(snapshot.affectedDecisions, true)}
      </div>
      ${renderDecisionDetail()}
    </div>`;
  attachRowHandlers();
}

function renderRemediation() {
  const summary = snapshot.remediationPlan.summary;
  const stats = [
    ["LoanCore", summary.loanCoreReopenActions, "blue"],
    ["CRM", summary.crmReopenActions, "teal"],
    ["Tickets", summary.ticketReopenActions, "amber"],
    ["Email drafts", summary.emailDraftActions, "violet"],
    ["Legacy portal", summary.legacyPortalActions, "red"],
    ["Audit events", summary.auditRegisterActions, "green"],
  ];
  const rows = snapshot.remediationPlan.actions
    .slice(0, 18)
    .map(
      (action) => `
      <tr>
        <td>${action.actionId}</td>
        <td>${action.system}</td>
        <td>${action.action}</td>
        <td>${action.applicationId}</td>
        <td><span class="pill ${action.riskBand || action.riskLevel}">${action.riskScore ?? action.riskLevel}</span></td>
        <td>${action.owner}</td>
        <td>${escapeHtml(action.idempotencyKey)}</td>
      </tr>`
    )
    .join("");
  document.getElementById("view").innerHTML = `
    <div class="action-grid">
      ${stats
        .map(
          ([label, value, tone]) => `
        <div class="action-stat metric" data-tone="${tone}">
          <span>${label}</span>
          <strong>${value}</strong>
        </div>`
        )
        .join("")}
    </div>
    <p class="muted-note">
      Skipped actions are safe idempotent rerun skips after the intentional Test Cloud failure; the original remediation actions were already completed.
    </p>
    <div class="table-wrap">
      <table>
        <thead>
          <tr><th>Action</th><th>System</th><th>Command</th><th>Application</th><th>Risk</th><th>Owner</th><th>Idempotency</th></tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
    </div>`;
}

function renderRiskExposure() {
  const risk = snapshot.riskScoring;
  const bandRows = Object.entries(risk.bandCounts)
    .map(([band, count]) => `<tr><td><span class="pill ${band}">${band}</span></td><td>${count}</td></tr>`)
    .join("");
  const rows = risk.topRisks
    .map(
      (item) => `
      <tr data-decision="${item.decisionId}" data-selected="${item.decisionId === selectedDecisionId}">
        <td><strong>${item.decisionId}</strong><br>${item.applicationId}</td>
        <td><span class="pill ${item.riskBand}">${item.riskScore}</span></td>
        <td>${escapeHtml(item.drivers.join(", "))}</td>
        <td>EUR ${item.potentialExposure.toLocaleString("en-US")}</td>
      </tr>`
    )
    .join("");
  document.getElementById("view").innerHTML = `
    <div class="action-grid">
      <div class="action-stat metric" data-tone="red"><span>Critical</span><strong>${risk.bandCounts.critical}</strong></div>
      <div class="action-stat metric" data-tone="amber"><span>High</span><strong>${risk.bandCounts.high}</strong></div>
      <div class="action-stat metric" data-tone="teal"><span>Medium</span><strong>${risk.bandCounts.medium}</strong></div>
      <div class="action-stat metric" data-tone="green"><span>Low</span><strong>${risk.bandCounts.low}</strong></div>
      <div class="action-stat metric" data-tone="violet"><span>Exposure</span><strong>EUR ${risk.potentialExposure.toLocaleString("en-US")}</strong></div>
    </div>
    <div class="split">
      <div class="table-wrap">
        <table>
          <thead><tr><th>Decision</th><th>Score</th><th>Drivers</th><th>Exposure</th></tr></thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
      <aside class="detail">
        <h3>Risk Band Counts</h3>
        <div class="table-wrap">
          <table><thead><tr><th>Band</th><th>Count</th></tr></thead><tbody>${bandRows}</tbody></table>
        </div>
      </aside>
    </div>`;
  attachRowHandlers();
}

function renderEvidenceChain() {
  const manifest = snapshot.evidenceManifest;
  const rows = Object.entries(manifest.artifacts)
    .map(
      ([name, entry]) => `
      <tr>
        <td>${escapeHtml(name)}</td>
        <td><code>${escapeHtml(entry.sha256)}</code></td>
        <td>${escapeHtml(entry.uri)}</td>
      </tr>`
    )
    .join("");
  document.getElementById("view").innerHTML = `
    <div class="detail">
      <h2>Tamper-evident Evidence Chain</h2>
      <dl class="kv">
        <dt>Manifest version</dt><dd>${manifest.manifestVersion}</dd>
        <dt>Manifest hash</dt><dd><code>${manifest.manifestSha256}</code></dd>
        <dt>Certificate artifact hash</dt><dd><code>${manifest.certificateArtifactSha256}</code></dd>
        <dt>Certificate artifact URI</dt><dd><code>${manifest.certificateArtifactUri}</code></dd>
      </dl>
    </div>
    <div class="table-wrap">
      <table>
        <thead><tr><th>Artifact</th><th>SHA-256</th><th>URI</th></tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </div>`;
}

function renderHumanReview() {
  const review = snapshot.case.computedFields.humanReviewOutcome;
  const test = snapshot.case.computedFields.testCloudVerification;
  document.getElementById("view").innerHTML = `
    <div class="split">
      <section class="detail">
        <h2>Human Review</h2>
        <dl class="kv">
          <dt>Recall Owner</dt><dd>${review.recallOwner}</dd>
          <dt>Business Owner</dt><dd>${review.businessOwner}</dd>
          <dt>Compliance</dt><dd>${review.complianceReviewer}</dd>
          <dt>Notes</dt><dd>${escapeHtml(review.notes)}</dd>
          <dt>Re-entry count</dt><dd>${snapshot.case.reentryCount}</dd>
          <dt>Final approval</dt><dd>${snapshot.case.computedFields.finalApprovalStatus}</dd>
        </dl>
      </section>
      <section class="detail">
        <h2>Verification Gate</h2>
        <dl class="kv">
          <dt>Status</dt><dd>${test.status}</dd>
          <dt>Passed</dt><dd>${test.passedCount}</dd>
          <dt>Failed</dt><dd>${test.failedCount}</dd>
          <dt>Test set</dt><dd>${test.testSet}</dd>
        </dl>
        <div class="table-wrap">
          <table>
            <thead><tr><th>ID</th><th>Name</th><th>Result</th></tr></thead>
            <tbody>${test.checks
              .map((check) => `<tr><td>${check.testId}</td><td>${check.name}</td><td>${check.passed ? "passed" : "failed"}</td></tr>`)
              .join("")}</tbody>
          </table>
        </div>
      </section>
    </div>`;
}

function markdownToHtml(markdown) {
  return markdown
    .split("\n")
    .map((line) => {
      if (line.startsWith("# ")) return `<h1>${escapeHtml(line.slice(2))}</h1>`;
      if (line.startsWith("## ")) return `<h2>${escapeHtml(line.slice(3))}</h2>`;
      if (line.startsWith("- ")) return `<p>${escapeHtml(line)}</p>`;
      if (!line.trim()) return "";
      return `<p>${escapeHtml(line)}</p>`;
    })
    .join("");
}

function renderCertificate() {
  document.getElementById("view").innerHTML = `<article class="certificate">${markdownToHtml(snapshot.certificateMarkdown)}</article>`;
}

function renderView() {
  if (activeTab === "Blast Radius") renderBlastRadius();
  if (activeTab === "DBOM") renderDbom();
  if (activeTab === "Dependency Graph") renderDependencyGraph();
  if (activeTab === "Replay Results") renderReplay();
  if (activeTab === "Risk & Exposure") renderRiskExposure();
  if (activeTab === "Remediation Plan") renderRemediation();
  if (activeTab === "Evidence Chain") renderEvidenceChain();
  if (activeTab === "Human Review") renderHumanReview();
  if (activeTab === "Certificate") renderCertificate();
}

function render() {
  renderStatusStrip();
  renderMetrics();
  renderFunnel();
  renderTimeline();
  renderTabs();
  renderView();
}

render();
