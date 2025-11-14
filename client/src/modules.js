import { lazy } from 'react';
import { UserContextProvider } from './UserContext';

const Layout = lazy(() => import('./Layout'));
const Home = lazy(() => import('./pages/Home'));
const NoPage = lazy(() => import('./pages/NoPage'));
const Login = lazy(() => import('./pages/Login'));
const Signup = lazy(() => import('./pages/Signup'));
const Poll = lazy(() => import('./pages/Poll'));
const Dashboard = lazy(() => import('./pages/Poll/Dashboard'));
const CreatePoll = lazy(() => import('./pages/Poll/CreatePoll'));
const EditPoll = lazy(() => import('./pages/Poll/EditPoll'));
const DeletePoll = lazy(() => import('./pages/Poll/DeletePoll'));
const MyPolls = lazy(() => import('./pages/Poll/MyPolls'));
const MyVotes = lazy(() => import('./pages/Poll/MyVotes'));
const MyFeeds = lazy(() => import('./pages/MyFeeds'));
const MyProfile = lazy(() => import('./pages/MyProfile'));
const IsAuthenticatedUser = lazy(() => import('./components/IsAuthenticatedUser'));

export {
  NoPage,
  Layout,
  Home,
  Login,
  Signup,
  Poll,
  Dashboard,
  CreatePoll,
  EditPoll,
  DeletePoll,
  MyPolls,
  MyVotes,
  MyFeeds,
  MyProfile,
  UserContextProvider,
  IsAuthenticatedUser
};
