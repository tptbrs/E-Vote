import { lazy } from 'react';
export default function lazyLoad(path, namedExport) {
    return lazy(() => {
        const promise = import(`${path}`)
        if (namedExport == null) {
            return promise
        } else {
            return promise.then(module => ({
                default: module[namedExport]
            }))
        }
    })
}

import { UserContextProvider } from "./UserContext";

const Layout = lazyLoad('./Layout/index.jsx');
const Home = lazyLoad("./pages/Home/index.jsx");
const NoPage = lazyLoad("./pages/NoPage.jsx");
const Login = lazyLoad("./pages/Login/index.jsx");
const Signup = lazyLoad("./pages/Signup/index.jsx");
const Poll = lazyLoad("./pages/Poll/index.jsx");
const Dashoard = lazyLoad("./pages/Poll/Dashboard/index.jsx");
const CreatePoll = lazyLoad("./pages/Poll/CreatePoll/index.jsx");
const EditPoll = lazyLoad('./pages/Poll/EditPoll/index.jsx');
const DeletePoll = lazyLoad('./pages/Poll/DeletePoll/index.jsx');
const MyPolls = lazyLoad("./pages/Poll/MyPolls/index.jsx");
const MyVotes = lazyLoad("./pages/Poll/MyVotes/index.jsx");
const MyFeeds = lazyLoad('./pages/MyFeeds/index.jsx');
const MyProfile = lazyLoad('./pages/MyProfile/index.jsx');
const IsAuthenticatedUser = lazyLoad('./components/IsAuthenticatedUser/index.jsx');


export { NoPage, Layout, Home, Login, Signup, Poll, Dashoard, CreatePoll, EditPoll, DeletePoll, MyPolls, MyVotes, MyFeeds, MyProfile, UserContextProvider, IsAuthenticatedUser }
