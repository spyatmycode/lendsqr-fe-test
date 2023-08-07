type Education = {
    level_of_education: string;
    employement_status: string;
    sector_of_employment: string;
    duration: string;
    office_email: string;
    monthly_income: number;
    loan_repayment: number;
  };
  
  type Socials = {
    twitter: string;
    instagram: string;
    facebook: string;
  };
  
  type Guarantor = {
    full_name: string;
    phone_number: string;
    gender: string;
    email: string;
  };
  
 export type Response = {
    id: string;
    organization: string;
    username: string;
    email: string;
    phonenumber: string;
    datejoined: string;
    status: string;
    balance: string;
    user_tier: string;
    balance_formatted: string;
    phone_number: string;
    BVN: number;
    gender: string;
    marital_status: string;
    children: number;
    residential_type: string;
    education: Education;
    socials: Socials;
    guarantor: Guarantor;
  };
  
