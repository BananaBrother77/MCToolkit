export async function onRequestGet({ request, env }) {
  const url = new URL(request.url);
  const host = url.searchParams.get('host');
  const bedrock = url.searchParams.get('bedrock') === 'true';

  if (!host) {
    return Response.json({ error: 'Missing host' }, { status: 400 });
  }

  const target = new URL('https://api.bananabrother77.dev/status');
  target.searchParams.set('host', host);
  if (bedrock) target.searchParams.set('bedrock', 'true');

  const res = await fetch(target, {
    headers: { 'x-api-key': env.STATUS_API_KEY },
  });

  if (!res.ok) {
    return Response.json(
      { online: false, error: 'Upstream error' },
      { status: res.status },
    );
  }

  const data = await res.json();

  if (!data.online) {
    return Response.json({ online: false });
  }

  return Response.json({
    online: true,
    icon: data.favicon,
    players: {
      online: data.players?.online ?? 0,
      max: data.players?.max ?? 0,
      list: (data.players?.list ?? []).map((p) => ({
        uuid: p.id,
        name_raw: p.name,
        name_clean: p.name,
        name_html: p.name,
      })),
    },
    version: {
      name_raw: data.version,
      name_clean: data.version,
    },
    motd: {
      raw: data.motd,
      clean: data.motd,
      html: data.motdHtml,
    },
  });
}
