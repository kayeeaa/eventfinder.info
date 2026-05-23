async function loadEvents() {
  const res = await fetch('data/biggleswade.json');
  const data = await res.json();
  const app = document.getElementById('app');

  const row = e => `<tr>
    <td>${e.name}</td><td>${e.date}</td><td>${e.time || '&mdash;'}</td>
    <td>${e.cost || 'Free'}</td><td>${e.address}</td>
    <td><a href="${e.source_url}" target="_blank" rel="noopener">View</a></td>
  </tr>`;

  const table = rows => `<table>
    <tr><th>Event</th><th>Date</th><th>Time</th><th>Cost</th><th>Address</th><th>Link</th></tr>
    ${rows.map(row).join('')}
  </table>`;

  const updated = data.generated_at ? `<p><small>Last updated: ${data.generated_at.slice(0, 10)}</small></p>` : '';

  app.innerHTML = `
    ${updated}
    <h2>This Week</h2>
    ${data.this_week.length ? table(data.this_week) : '<p>No events found for this week.</p>'}
    <h2>Tickets On Sale Now</h2>
    ${data.on_sale.length ? table(data.on_sale) : '<p>No upcoming events currently on sale.</p>'}
  `;
}

loadEvents();
