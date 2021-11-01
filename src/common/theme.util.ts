export interface Theme {
  primaryColor: string;
  secondaryColor: string;
  tertiaryColor: string;
  textColor: string;
  backgroundColor: string;
}

// https://coolors.co/283d3b-197278-fcf9f7-c44536-772e25
export const lightTheme: Theme = {
  primaryColor: '#c44536',
  secondaryColor: '#772e25',
  tertiaryColor: '#197278',
  textColor: '#283d3b',
  backgroundColor: '#fcf9f7'
};

// https://coolors.co/e1dfdd-1eb1bb-171717-ec2915-fb978d
export const darkTheme: Theme = {
  primaryColor: '#fd4633',
  secondaryColor: '#fb978d',
  tertiaryColor: '#1eb1bb',
  textColor: '#e1dfdd',
  backgroundColor: '#171717'
};
