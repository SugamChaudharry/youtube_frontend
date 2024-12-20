import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./app/store";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Login from "./features/auth/pages/Login";
import Register from "./features/auth/pages/Register";
import TermsAndConditions from "./features/LegalAndPolicy/components/TermsAndConditions";
import {
  ChangeInformation,
  ChangePassword,
  SettingLayout,
} from "./features/setting";
import ChannelLayout from "./features/channel/ChannelLayout";
import AuthLayout from "./features/auth/components/AuthLayout";
import App from "./App";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ChannelPlaylist from "./features/playList/pages/ChannelPlaylist";
import ChannelTweets from "./features/tweets/pages/ChannelTweets";
import ChannelSubscribers from "./features/subscribers/pages/ChannelSubscribers";
import ChannelVideos from "./features/videos/pages/ChannelVideos";
import HomeVideos from "./features/videos/pages/HomeVideos";
import VideoDetailLayout from "./features/videos/components/VideoDetailLayout";
import PrivacyPolicy from "./features/LegalAndPolicy/components/PrivacyPolicy";
import SearchVideo from "./features/videos/pages/SearchVideo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <AuthLayout authentication={false}>
            <HomeVideos />
          </AuthLayout>
        ),
      },
      {
        path: "/search",
        element: (
          <AuthLayout authentication={false}>
            <SearchVideo />
          </AuthLayout>
        ),
      },
      {
        path: "/Setting",
        element: (
          <AuthLayout authentication>
            <SettingLayout />
          </AuthLayout>
        ),
        children: [
          { index: true, element: <Navigate to="ChangeInfo" replace /> },
          { path: "ChangeInfo", element: <ChangeInformation /> },
          { path: "ChangePassword", element: <ChangePassword /> },
        ],
      },
      {
        path: "/Channel/:userName",
        element: (
          <AuthLayout authentication>
            <ChannelLayout />
          </AuthLayout>
        ),
        children: [
          { index: true, element: <Navigate to="Videos" replace /> },
          { path: "Videos", element: <ChannelVideos /> },
          { path: "PlayList", element: <ChannelPlaylist /> },
          { path: "Tweets", element: <ChannelTweets /> },
          { path: "Subscribed", element: <ChannelSubscribers /> },
        ],
      },
    ],
  },
  {
    path: "/watch/:videoId",
    element: (<VideoDetailLayout />),
  },
  {
    path: "/login",
    element: (
      <AuthLayout authentication={false}>
        <Login />
      </AuthLayout>
    ),
  },
  {
    path: "/signup",
    element: (
      <AuthLayout authentication={false}>
        <Register />
      </AuthLayout>
    ),
  },
  { path: "/TermsAndConditions", element: <TermsAndConditions /> },
  { path: "/PrivacyPolicy", element: <PrivacyPolicy /> },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      <ToastContainer position="top-right" />
    </Provider>
  </StrictMode>
);
