interface Outlet {
  outletId: number;
  outletName: string;
  address: string;
  businessHours: string;
  businessHoursNote: string;
  outletImage: string;
  outletDirection: string;
  contacts: [
    {
      contact: string;
    },
  ];
}
