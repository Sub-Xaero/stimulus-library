import React from "react";

const TYPE_COLORS = {
  String:  { bg: "#eff6ff", color: "#1d4ed8" },
  Boolean: { bg: "#f0fdf4", color: "#166534" },
  Number:  { bg: "#fff7ed", color: "#9a3412" },
  Date:    { bg: "#fdf4ff", color: "#7e22ce" },
  Object:  { bg: "#fefce8", color: "#854d0e" },
  Array:   { bg: "#fdf2f8", color: "#9d174d" },
};

const DARK_TYPE_COLORS = {
  String:  { bg: "#1e3a5f", color: "#93c5fd" },
  Boolean: { bg: "#14532d", color: "#86efac" },
  Number:  { bg: "#431407", color: "#fdba74" },
  Date:    { bg: "#3b0764", color: "#d8b4fe" },
  Object:  { bg: "#422006", color: "#fde68a" },
  Array:   { bg: "#500724", color: "#f9a8d4" },
};

function TypeBadge({ type }) {
  if (!type) return null;
  const isDark = typeof document !== "undefined" &&
    document.documentElement.getAttribute("data-theme") === "dark";
  const palette = isDark ? DARK_TYPE_COLORS : TYPE_COLORS;
  const style = palette[type] ?? { bg: "#f1f5f9", color: "#475569" };
  return (
    <span style={{
      display: "inline-block",
      padding: "0.15em 0.55em",
      borderRadius: "999px",
      fontSize: "0.72em",
      fontWeight: 600,
      fontFamily: "var(--ifm-font-family-monospace)",
      background: style.bg,
      color: style.color,
      whiteSpace: "nowrap",
    }}>
      {type}
    </span>
  );
}

function DefaultValue({ value }) {
  if (!value || value === "-") return <span style={{ color: "var(--ifm-color-emphasis-500)" }}>—</span>;
  return <code>{value}</code>;
}

/**
 * ApiTable — renders a styled API reference table with type badges.
 *
 * Props:
 *   columns   {Array<{key, label}>}   Column definitions.
 *   rows      {Array<object>}         Row data keyed by column.key.
 *   typeKey   {string}                Which column holds type info for the badge. Default "type".
 *   defaultKey {string}               Which column renders as <DefaultValue>. Default "default".
 */
export function ApiTable({ columns, rows, typeKey = "type", defaultKey = "default" }) {
  if (!rows || rows.length === 0) return null;

  return (
    <table style={{ marginBottom: "1rem" }}>
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col.key} style={{ textAlign: "left" }}>{col.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i}>
            {columns.map((col) => (
              <td key={col.key}>
                {col.key === typeKey ? (
                  <TypeBadge type={row[col.key]} />
                ) : col.key === defaultKey ? (
                  <DefaultValue value={row[col.key]} />
                ) : (
                  <span dangerouslySetInnerHTML={{ __html: row[col.key] ?? "—" }} />
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

/**
 * Pre-built tables for common Stimulus concepts.
 */

export function ValueTable({ rows }) {
  return (
    <ApiTable
      columns={[
        { key: "name", label: "Value" },
        { key: "type", label: "Type" },
        { key: "description", label: "Description" },
        { key: "default", label: "Default" },
      ]}
      rows={rows}
      typeKey="type"
      defaultKey="default"
    />
  );
}

export function TargetTable({ rows }) {
  return (
    <ApiTable
      columns={[
        { key: "name", label: "Target" },
        { key: "purpose", label: "Purpose" },
        { key: "default", label: "Default" },
      ]}
      rows={rows}
      defaultKey="default"
    />
  );
}

export function ClassTable({ rows }) {
  return (
    <ApiTable
      columns={[
        { key: "name", label: "Class" },
        { key: "purpose", label: "Purpose" },
        { key: "default", label: "Default" },
      ]}
      rows={rows}
      defaultKey="default"
    />
  );
}

export function EventTable({ rows }) {
  return (
    <ApiTable
      columns={[
        { key: "name", label: "Event" },
        { key: "when", label: "When" },
        { key: "dispatchedOn", label: "Dispatched on" },
        { key: "detail", label: "event.detail" },
      ]}
      rows={rows}
    />
  );
}
