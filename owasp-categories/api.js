// OWASP Top 10 API Security Risks – 2023 data taken from -> https://owasp.org/API-Security/editions/2023/en/0x11-t10/
document.owaspApi = {
    "API1:2023 Broken Object Level Authorization": [
        "CWE-285: Improper Authorization",
        "CWE-639: Authorization Bypass Through User-Controlled Key",
    ],
    "API2:2023 Broken Authentication": [
        "CWE-204: Observable Response Discrepancy",
        "CWE-307: Improper Restriction of Excessive Authentication Attempts",
    ],
    "API3:2023 Broken Object Property Level Authorization": [
        "CWE-213: Exposure of Sensitive Information Due to Incompatible Policies",
        "CWE-915: Improperly Controlled Modification of Dynamically-Determined Object Attributes",
    ],
    "API4:2023 Unrestricted Resource Consumption": [
        "CWE-400: Uncontrolled Resource Consumption",
        "CWE-770: Allocation of Resources Without Limits or Throttling",
        "CWE-799: Improper Control of Interaction Frequency",
    ],
    "API5:2023 Broken Function Level Authorization": [
        "CWE-285: Improper Authorization",
    ],
    "API6:2023 Unrestricted Access to Sensitive Business Flows": [
        "API6:2023 Unrestricted Access to Sensitive Business Flows",
    ],
    "API7:2023 Server Side Request Forgery": [
        "CWE-918: Server-Side Request Forgery (SSRF)",
    ],
    "API8:2023 Security Misconfiguration": [
        "CWE-2: Environmental Security Flaws",
        "CWE-16: Configuration",
        "CWE-209: Generation of Error Message Containing Sensitive Information",
        "CWE-319: Cleartext Transmission of Sensitive Information",
        "CWE-388: Error Handling",
        "CWE-444: Inconsistent Interpretation of HTTP Requests ('HTTP Request/Response Smuggling')",
        "CWE-942: Permissive Cross-domain Policy with Untrusted Domains",
    ],
    "API9:2023 Improper Inventory Management": [
        "CWE-1059: Incomplete Documentation",
    ],
    "API10:2023 Unsafe Consumption of APIs": [
        "CWE-20: Improper Input Validation",
        "CWE-200: Exposure of Sensitive Information to an Unauthorized Actor",
        "CWE-319: Cleartext Transmission of Sensitive Information",
    ],
};
