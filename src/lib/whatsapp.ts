type WhatsAppSendArgs = {
  to: string; // E.164, e.g. +23055068119
  templateName: string;
  lang?: string; // e.g. en_US
  variables: string[]; // template variables in order
};

export async function sendWhatsAppTemplate(args: WhatsAppSendArgs) {
  const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;
  const accessToken = process.env.WHATSAPP_ACCESS_TOKEN;

  if (!phoneNumberId) throw new Error("Missing WHATSAPP_PHONE_NUMBER_ID");
  if (!accessToken) throw new Error("Missing WHATSAPP_ACCESS_TOKEN");

  const url = `https://graph.facebook.com/v20.0/${phoneNumberId}/messages`;

  const payload = {
    messaging_product: "whatsapp",
    to: args.to.replace(/\s/g, ""),
    type: "template",
    template: {
      name: args.templateName,
      language: { code: args.lang || "en_US" },
      components: [
        {
          type: "body",
          parameters: args.variables.map((v) => ({ type: "text", text: v })),
        },
      ],
    },
  };

  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error(
      `WhatsApp send failed (${res.status}): ${data?.error?.message || "Unknown error"}`
    );
  }
  return data;
}
