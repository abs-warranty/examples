module.exports = {
  exampleRegistration: {
    product_id: process.env.PRODUCT_ID,
    invoiceNumber: '001-20345',
    enrollDate: new Date(),
    customer: {
      name: 'John Doe',
      email: 'john.doe@example.com',
    },
    vehicle: {
      year: 2021,
      make: 'Tesla',
      model: 'Model 3',
    },
    tires: [
      {
        make: 'BRIDGESTONE',
        model: 'TURANZA ER33',
        size: '235/45R18',
        retailPrice: 334.31,
      },
      {
        make: 'BRIDGESTONE',
        model: 'TURANZA ER33',
        size: '235/45R18',
        retailPrice: 334.31,
      },
      {
        make: 'BRIDGESTONE',
        model: 'TURANZA ER33',
        size: '235/45R18',
        retailPrice: 334.31,
      },
      {
        make: 'BRIDGESTONE',
        model: 'TURANZA ER33',
        size: '235/45R18',
        retailPrice: 334.31,
      },
    ],
  },
}
