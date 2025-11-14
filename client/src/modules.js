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

const Layout = lazyLoad('./Layout.jsx');
const Home = lazyLoad("./pages/Home.jsx");
const NoPage = lazyLoad("./pages/NoPage.jsx");
const Login = lazyLoad("./pages/Login.jsx");
const Signup = lazyLoad("./pages/Signup.jsx");
const Poll = lazyLoad("./pages/Poll.jsx");
const Dashoard = lazyLoad("./pages/Poll/Dashboard.jsx");
const CreatePoll = lazyLoad("./pages/Poll/CreatePoll.jsx");
const EditPoll = lazyLoad('./pages/Poll/EditPoll.jsx');
const DeletePoll = lazyLoad('./pages/Poll/DeletePoll.jsx');
const MyPolls = lazyLoad("./pages/Poll/MyPolls.jsx");
const MyVotes = lazyLoad("./pages/Poll/MyVotes.jsx");
const MyFeeds = lazyLoad('./pages/MyFeeds.jsx');
const MyProfile = lazyLoad('./pages/MyProfile.jsx');
const IsAuthenticatedUser = lazyLoad('./components/IsAuthenticatedUser.jsx');


export { NoPage, Layout, Home, Login, Signup, Poll, Dashoard, CreatePoll, EditPoll, DeletePoll, MyPolls, MyVotes, MyFeeds, MyProfile, UserContextProvider, IsAuthenticatedUser }
