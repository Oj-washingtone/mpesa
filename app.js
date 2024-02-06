import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

// alow json body parsing
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/api/c/payment", (req, res) => {
  const paymentDetails = req.body;

  console.log(paymentDetails);

  res.send(paymentDetails);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

// Notes:
/**
 *
 * The endpoint created in your Node.js application is the one you will
 * register with Safaricom when setting up your application on the M-Pesa Daraja API.
 * This endpoint is where Safaricom will send payment notifications when customers make payments
 * to the till number associated with your application.
 *
 * When you register your application with Safaricom, they typically
 * provide a dashboard or interface where you can input various details about your application,
 * including the callback URL. During this registration process, you'll specify the endpoint on
 * your server that Safaricom should use to send payment notifications.
 *
 *
 * The endpoint you create in your Node.js application will receive a POST request from Safaricom
 * whenever a payment is made to the till number associated with your application.
 * The POST request will contain a JSON payload with details about the payment.
 * The JSON payload will be in the following format:
 * {
 * "Body": {
 * "stkCallback": {
 * "MerchantRequestID": "12345-67890-1",
 * "CheckoutRequestID": "abcde-fghij-1",
 * "ResultCode": 0,
 * "ResultDesc": "The service request is processed successfully.",
 * "CallbackMetadata": {
 * "Item": [
 * {
 * "Name": "Amount",
 * "Value": 10
 * },
 * {
 * "Name": "MpesaReceiptNumber",
 * "Value": "LGR019GQTX"
 * },
 * {
 * "Name": "Balance"
 * },
 * {
 * "Name": "TransactionDate",
 * "Value": 20190127101010
 * },
 * {
 * "Name": "PhoneNumber",
 * "Value": 254708374149
 * }
 * ]
 * }
 * }
 * }
 * }
 * The JSON payload contains the following fields:
 * MerchantRequestID: This is a unique identifier for the payment request.
 * CheckoutRequestID: This is a unique identifier for the payment transaction.
 * ResultCode: This is a numeric code that indicates whether the payment request was successful.
 * A value of 0 indicates that the request was successful.
 * ResultDesc: This is a description of the result code.
 * CallbackMetadata: This is a JSON object containing details about the payment.
 * The CallbackMetadata object contains an array of Item objects.
 * Each Item object contains details about the payment.
 * The Item object contains the following fields:
 * Name: This is the name of the item.
 * Value: This is the value of the item.
 * The Item object can contain the following items:
 * Amount: This is the amount of the payment.
 * MpesaReceiptNumber: This is the receipt number of the payment.
 * Balance: This is the balance of the payment.
 * TransactionDate: This is the date of the payment.
 * PhoneNumber: This is the phone number of the customer making the payment.
 * The following is an example of a callback payload:
 * {
 * "Body": {
 * "stkCallback": {
 * "MerchantRequestID": "12345-67890-1",
 * "CheckoutRequestID": "abcde-fghij-1",
 * "ResultCode": 0,
 * "ResultDesc": "The service request is processed successfully.",
 * "CallbackMetadata": {
 * "Item": [
 * {
 * "Name": "Amount",
 * "Value": 10
 * },
 * {
 * "Name": "MpesaReceiptNumber",
 * "Value": "LGR019GQTX"
 * },
 * {
 * "Name": "Balance"
 * },
 * {
 * "Name": "TransactionDate",
 * "Value": 20190127101010
 * },
 * {
 * "Name": "PhoneNumber",
 * "Value": 254708374149
 * }
 * ]
 * }
 * }
 * }
 * }
 *
 *
 */
