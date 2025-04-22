const mongoose = require('mongoose');

const applicantSchema = new mongoose.Schema({
  civilStatus: {
    lastName: String,
    firstName: String,
    birthDate: Date,
    birthPlace: String,
    legalProtectionStatus: String,
    address: {
      street: String,
      city: String,
    },
    housing: {
      status: { type: String, enum: ['Owner', 'Tenant', 'Other'] },
    },
    maritalStatus: {
      status: { type: String, enum: ['Single', 'Married', 'Civil Union', 'Divorced', 'Legally Separated'] },
      maritalRegime: String,
      unionDate: Date,
    },
    children: [{
      age: Number
    }],
    contact: {
      email: String,
      phone: String,
    },
  },

  professional: {
    employmentStatus: {
      type: String,
      enum: [
        'Permanent Contract', 'Fixed-term Contract', 'Temp',
        'Sole Proprietor',
        'Self-employed',
        'Merchant',
        'Craftsman',
        'Farmer',
        'Company Manager'
      ],
    },
    contractStartDate: Date,
    contractEndDate: Date,
    companyName: String,
    companyAddress: String,
    taxResidence: String,
  },

  householdIncome: {
    salaried: {
      netTaxableIncome: Number,
      taxNoticeRFR: Number,
    },
    nonSalaried: {
      declaredProfits: Number,
    },
    capitalIncome: {
      securitiesIncome: Number,
      dividends: Number,
      realEstateIncome: Number,
      yieldSharesIncome: Number,
    },
    socialBenefits: {
      familyAllowances: Number,
      alimonyReceived: Number,
      unemploymentBenefits: Number,
      rsa: Number,
      housingAssistance: Number,
      personalizedHousingAid: Number,
      disabilityAllowance: Number,
      lossOfAutonomyAllowance: Number,
      dailyAllowances: Number,
      additionalThirdPartyAssistance: Number,
      singleParentAllowance: Number,
      orphanPension: Number,
    }
  },

  expenses: {
    loans: [{
      type: { type: String },
      amount: Number,
      insuranceIncluded: Boolean
    }],
    alimonyPaid: Number,
    compensatoryAllowance: Number,
    incomeTax: Number,
    rent: Number,
    requestedLoanInstallments: Number,
    familyLoan: Number,
    cpsExpenses: Number,
    scheduledPayments: Number,
    lifeInsurancePledge: Boolean
  },

  user: {
    type:mongoose.Schema.Types.ObjectId,
    required:true,
    ref: 'User'
  }
}, {
  timestamps: true,
});

const Applicant = mongoose.model('Applicant', applicantSchema);

module.exports = Applicant;