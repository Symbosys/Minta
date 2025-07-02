import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import App from './App';
import Layout from './layouts/dashboard';
import DashboardPage from './pages/admin';
import OrdersPage from './pages/admin/orders';
import Test from './pages/admin/test';
import SignIN from './pages/admin/SingIn';
import Accountt from './components/AccountDemoSignedIn';
import { ProtectedRoute } from './app/ProtectedRoute';
import AddAdmin from './pages/admin/account/Add';
import "./index.css"
import View from './pages/admin/account/View';
import AddCategory from './pages/admin/category/AddCategory';
import ManageCategory from './pages/admin/category/ManageCategory';
import AddSubCategory from './pages/admin/subCategory/AddSubCategory';
import ManageSubCategory from './pages/admin/subCategory/ManageSubCategory';
import AddCoupn from './pages/admin/coupon/AddCoupn';
import ManageCoupon from './pages/admin/coupon/ManageCoupon';
import Profile from './pages/admin/profile/Profile';
import ViewOrder from './pages/admin/order/ViewOrder';
import OrderStatus from './pages/admin/order/OrderStatus';
import Transactions from './pages/admin/payment/Transactions';
import Refunds from './pages/admin/payment/Refunds';
import PayOut from './pages/admin/payment/PayOut';
const router = createBrowserRouter([
  {
    Component: App,
    children: [
      {
        path: '/',
        Component: Layout,
        children: [
          {
            path: 'signIn',
            Component: SignIN, // Public route
          },

          {
            path: '',
            Component: ProtectedRoute, // Protects all routes inside

            children: [
              {
                path: '',
                Component: DashboardPage,
              },
              // Account 
              {
                path: 'admin/add-admin',
                Component: AddAdmin,
              },
              {
                path: 'admin/add',
                Component: AddAdmin,
              },
              {
                path: 'admin/view',
                Component: View,
              },
              {
                path: 'sub-admin/add',
                Component: AddAdmin,
              },
              { 
                path: 'users/view',
                Component: View,
              },
              {
                path: 'seller/view',
                Component: View,
              },
              {
                path: 'delivery/view',
                Component: View,
              },
              {
                path: 'sub-admin/view',
                Component: View,
              },


              // Main 

              // Category 
              {
                path: '/category/add-category',
                Component: AddCategory,
              },
              {
                path: '/category/manage-category',
                Component: ManageCategory,
              },

              // Sub Category 
              {
                path: '/subcategory/add-subcategory',
                Component: AddSubCategory,
              },
              {
                path: '/subcategory/manage-subcategory',
                Component: ManageSubCategory,
              },

              // Coupon 
              {
                path: '/coupon/add-coupon',
                Component: AddCoupn,
              },
              {
                path: '/coupon/manage-coupon',
                Component: ManageCoupon,
              },

              // Orders 
              {
                path: '/order/view-orders',
                Component: ViewOrder,
              },
              {
                path: '/order/order-status',
                Component: OrderStatus,
              },

              // Payment 
              {
                path: '/payment/transactions',
                Component: Transactions,
              },
              {
                path: '/payment/refunds',
                Component: Refunds,
              },
              {
                path: '/payment/pay-out',
                Component: PayOut,
              },
              {
                path: '/payment/refunds',
                Component: OrderStatus,
              },

              // Profile
              {
                path: 'profile',
                Component: Profile,
              },
              {
                path: 'orders',
                Component: OrdersPage,
              },
              {
                path: 'orders/o',
                Component: Test,
              },
              {
                path: 'orders/p',
                Component: SignIN,
              },
              {
                path: 'test',
                Component: Test,
              },
            ],

          },
        ],
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>

    <RouterProvider router={router} />
  // </React.StrictMode>,
);