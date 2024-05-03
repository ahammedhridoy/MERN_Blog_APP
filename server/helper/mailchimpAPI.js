const mailchimp = require("@mailchimp/mailchimp_marketing");

mailchimp.setConfig({
  apiKey: process.env.KEY,
  server: process.env.API_SERVER, // e.g., 'us6'
});

const subscribeToNewsletter = async (email) => {
  try {
    const response = await mailchimp.lists.addListMember(process.env.ID, {
      email_address: email,
      status: "subscribed",
    });

    return response;
  } catch (error) {
    console.error("Error subscribing:", error);
    throw error;
  }
};

module.exports = {
  subscribeToNewsletter,
};
