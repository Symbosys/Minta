import * as React from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { Outlet } from 'react-router';
import { ReactRouterAppProvider } from '@toolpad/core/react-router';
import type { Navigation } from '@toolpad/core/AppProvider';
import AddIcon from '@mui/icons-material/Add';
import SaveIcon from '@mui/icons-material/Save';
import VisibilityIcon from '@mui/icons-material/Visibility';
import PersonIcon from '@mui/icons-material/Person';
import PeopleIcon from '@mui/icons-material/People';
import CategoryIcon from "@mui/icons-material/Category";
import SubdirectoryArrowRightIcon from "@mui/icons-material/SubdirectoryArrowRight";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PaymentIcon from "@mui/icons-material/Payment";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import ListAltIcon from "@mui/icons-material/ListAlt";
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import StorefrontIcon from '@mui/icons-material/Storefront';
import GroupIcon from '@mui/icons-material/Group';
import logo from './asserts/logo/Minta.png';
import { isAuthenticated } from './app/ProtectedRoute';
import { Navigate } from 'react-router-dom';
import Index from './pages/admin';
import SingIn from './pages/admin/SingIn';
import AddAdmin from './pages/admin/account/Add';
import { Logout } from '@mui/icons-material';


const NAVIGATION: Navigation = [
  // {
  //   kind: "header",
  //   title: "Account",
  // },
  {
    title: "Dashboard",
    icon: <DashboardIcon />,
  },
  {
    kind: "header",
    title: "Account",
  },

  {
    segment: "admin",
    title: "Admin",
    icon: <PersonIcon />,
    children: [
      {
        icon: <AddIcon />,
        segment: "add",
        title: "Add",
      },
      {
        icon: <VisibilityIcon />,
        segment: "view",
        title: "View",
      },
    ],
  },

  {
    segment: "sub-admin",
    title: "Sub Admin",
    icon: <PeopleIcon />,
    children: [
      {
        icon: <AddIcon />,
        segment: "add",
        title: "ADD",
      },
      {
        icon: <VisibilityIcon />,
        segment: "view",
        title: "View",
      },
    ],
  },
  {
    segment: "users",
    title: "Users",
    icon: <GroupIcon />,
    children: [
      {
        icon: <VisibilityIcon />,
        segment: "view",
        title: "view",
      },
      // {
      //   segment: "test/case2",
      //   title: "Test Case 2",
      // },
    ],
  },
  {
    segment: "seller",
    title: "Seller",
    icon: <StorefrontIcon />,
    children: [
      {
        icon: <VisibilityIcon />,
        segment: "view",
        title: "view",
      },
      // {
      //   segment: "test/case2",
      //   title: "Test Case 2",
      // },
    ],
  },
  {
    segment: "delivery",
    title: "Delivery",
    icon: <DeliveryDiningIcon />,
    children: [
      {
        icon: <VisibilityIcon />,
        segment: "view",
        title: "view",
      },
      // {
      //   segment: "test/case2",
      //   title: "Test Case 2",
      // },
    ],
  },

  {
    kind: "header",
    title: "Main",
  },
  {
    segment: "category",
    title: "Category",
    icon: <CategoryIcon />,
    children: [
      { segment: "add-category", title: "Add Category", icon: <ListAltIcon /> },
      { segment: "manage-category", title: "Manage Categories", icon: <ListAltIcon /> },
    ],
  },
  {
    segment: "subcategory",
    title: "SubCategory",
    icon: <SubdirectoryArrowRightIcon />,
    children: [
      { segment: "add-subcategory", title: "Add SubCategory", icon: <ListAltIcon /> },
      { segment: "manage-subcategory", title: "Manage SubCategories", icon: <ListAltIcon /> },
    ],
  },
  {
    segment: "product",
    title: "Product",
    icon: <ShoppingBagIcon />,
    children: [
      { segment: "add-product", title: "Add Product", icon: <ListAltIcon /> },
      { segment: "manage-product", title: "Manage Products", icon: <ListAltIcon /> },
    ],
  },
  {
    segment: "coupon",
    title: "Coupon",
    icon: <LocalOfferIcon />,
    children: [
      { segment: "add-coupon", title: "Add Coupon", icon: <ListAltIcon /> },
      { segment: "manage-coupon", title: "Manage Coupons", icon: <ListAltIcon /> },
    ],
  },
  {
    segment: "order",
    title: "Order",
    icon: <ShoppingCartIcon />,
    children: [
      { segment: "view-orders", title: "View Orders", icon: <ListAltIcon /> },
      { segment: "order-status", title: "Order Status", icon: <ListAltIcon /> },
    ],
  },
  {
    segment: "payment",
    title: "Payment",
    icon: <PaymentIcon />,
    children: [
      { segment: "transactions", title: "Transactions", icon: <ListAltIcon /> },
      { segment: "refunds", title: "Refunds", icon: <ListAltIcon /> },
      { segment: "pay-out", title: "Pay Out", icon: <ListAltIcon /> },
    ],
  },
  {
    kind: "header",
    title: "Settings",
  },
  {
    segment: "profile",
    title: "Profile",
    icon: <AssignmentIndIcon />,
  },
  {
    segment: "SignOut",
    title: "Sign Out",
    icon: <Logout />,
  },
];


const BRANDING = {
  title: "",
  logo: <img src={logo} alt="App Logo" width="100" height="40" /> 
};


export default function App() {
  
  // return (
  //   isAuthenticated() ?
  //   <ReactRouterAppProvider navigation={NAVIGATION} branding={BRANDING} >
  //     <Outlet />
  //     </ReactRouterAppProvider> :
  //     <Navigate to="/signIn" />
  // );
  
  // return (
  //   isAuthenticated() ?
  //   <ReactRouterAppProvider navigation={NAVIGATION} branding={BRANDING} >
  //     <Outlet />
  //     </ReactRouterAppProvider> 
  //     :
  //     <SingIn />

  // );


  return (
      <ReactRouterAppProvider navigation={NAVIGATION} branding={BRANDING} >
        <Outlet />
      </ReactRouterAppProvider>


  );
}