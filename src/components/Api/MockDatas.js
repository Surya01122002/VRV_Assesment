export const users = [
  {
    userId: 1,
    name: "Surya",
    email: "surya@gmail.com",
    role: "Admin",
    status: "Active",
    created: "2021-01-01",
    image:""  },
  {
    userId: 2,
    name: "Senthil",
    email: "Senthil@gmail.com",
    role: "User",
    status: "Inactive",
    created: "2022-02-15",
    image: "",
  },
  {
    userId: 3,
    name: "Ramesh",
    email: "Ramesh@gmail.com",
    role: "User",
    status: "Active",
    created: "2023-03-12",
    image:""
    },

  {
    userId: 4,
    name: "Sidharth",
    email: "Sidharth@gmail.com",
    role: "Manager",
    status: "Inactive",
    created: "2024-06-10",
    image: ""  },
];


export const roles = [
  {
    Id: 1,
    rolename: "Admin",
    description:
      "Has full access to all resources and can manage all users and data.",
    permissions: {
      read: true,
      write: true,
      delete: true,
      manageRoles: true,
      viewAnalytics: true,
    },
  },
  {
    Id: 2,
    rolename: "User",
    description:
      "Can read and write their own data, but cannot modify others' data.",
    permissions: {
      read: true,
      write: false,
      delete: false,
      manageRoles: false,
      viewAnalytics: true,
    },
  },
  {
    Id: 3,
    rolename: "Manager",
    description:
      "Can manage users, assign roles, and view reports, but cannot delete data.",
    permissions: {
      read: true,
      write: true,
      delete: false,
      manageRoles: false,
      viewAnalytics: true,
    },
  },
  // {
  //   Id: 4,
  //   rolename: "Guest",
  //   description:
  //     "Has limited access to view content but cannot make changes or access sensitive data.",
  //   permissions: {
  //     read: true,
  //     write: true,
  //     delete: false,
  //     manageRoles: false,
  //     viewAnalytics: false,
  //   },
  // },
  // {
  //   Id: 5,
  //   rolename: "Moderator",
  //   description:
  //     "Can moderate user-generated content and manage user activities.",
  //   permissions: {
  //     read: true,
  //     write: true,
  //     delete: false,
  //     manageRoles: true,
  //     viewAnalytics: false,
  //   },
  // },
  {
    Id: 4,
    rolename: "Super Admin",
    description:
      "Has the highest level of access, can perform any action across the platform, including system-level management.",
    permissions: {
      read: true,
      write: true,
      delete: false,
      manageRoles: false,
      viewAnalytics: false,
    },
  },
];

export const permissions = [
  {
    id: 1,
    permission: "Read",
    description: "Allows reading of data",
  },
  {
    id: 2,
    permission: "Write",
    description: "Allows writing of data",
  },
  {
    id: 3,
    permission: "Execute",
    description: "Allows execution of operations",
  },
  // {
  //   id: 4,
  //   permission: "Delete",
  //   description: "Allows deletion of records",
  // },
  // {
  //   id: 5,
  //   permission: "Admin",
  //   description: "Full administrative permissions",
  // },
  // {
  //   id: 6,
  //   permission: "View Reports",
  //   description: "Permission to view reports",
  // },
];
