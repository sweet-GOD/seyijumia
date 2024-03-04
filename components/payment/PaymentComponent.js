import React from 'react';


const PaymentComponent = ({ cartSum, formData }) => {
  const paymentData = {
    tx_ref: 'titanic-48981487343MDI0NzMx',
    amount: cartSum,
    currency: 'NGN',
    payment_options: 'card, mobilemoney, ussd',
    customer: {
      email: 'user@example.com',
      phonenumber: formData.phonenumber,
      name: 'John Doe',
    },
    customizations: {
      title: 'My Jumia Project',
      description: 'Payment for items in cart',
    },
  };

  const callback = (response) => {
    console.log(response);
    // Handle payment success or failure
  };

  const onClose = () => {
    console.log('Payment closed');
  };

  return (
    <Flutterwave
      publicKey="FLWPUBK_TEST-d5bf583900dc8fdd264c19fcede65f68-X"
      tx_ref={paymentData.tx_ref}
      amount={paymentData.amount}
      currency={paymentData.currency}
      payment_options={paymentData.payment_options}
      customer={paymentData.customer}
      customizations={paymentData.customizations}
      callback={callback}
      onClose={onClose}
    />
  );
};

export default PaymentComponent;
