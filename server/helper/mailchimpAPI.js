const mailchimp = require("@mailchimp/mailchimp_marketing");

const API_KEY = "c2cadc9453272bc30c318fd7a2a068ed-us17";
const MAILCHIMP_API_SERVER = "us17";
const AUDIENCE_ID = "9d3fe27040";

mailchimp.setConfig({
  apiKey: API_KEY,
  server: MAILCHIMP_API_SERVER, // e.g., 'us6'
});

const subscribeToNewsletter = async (email) => {
  try {
    const response = await mailchimp.lists.addListMember(AUDIENCE_ID, {
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
