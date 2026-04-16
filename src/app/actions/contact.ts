"use server";

interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  business: string;
  message: string;
}

export async function submitContactForm(formData: FormData): Promise<{ success: boolean; error?: string }> {
  const data: ContactFormData = {
    name: formData.get("name") as string,
    phone: formData.get("phone") as string,
    email: formData.get("email") as string,
    business: formData.get("business") as string,
    message: formData.get("about") as string,
  };

  // Validate required fields
  if (!data.name || !data.phone || !data.email) {
    return { success: false, error: "Please fill in all required fields." };
  }

  try {
    // TODO: Connect to your email service (Resend, SendGrid, etc.)
    // Example with Resend:
    // await resend.emails.send({
    //   from: "Bridge To AI <noreply@bridgetoai.com.au>",
    //   to: "hello@bridgetoai.com.au",
    //   subject: `New audit request from ${data.name}`,
    //   text: `Name: ${data.name}\nPhone: ${data.phone}\nEmail: ${data.email}\nBusiness: ${data.business}\nMessage: ${data.message}`,
    // });

    console.log("Contact form submission:", data);
    return { success: true };
  } catch {
    return { success: false, error: "Something went wrong. Please try again." };
  }
}
