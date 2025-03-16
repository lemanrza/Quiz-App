import Home from "../User/Pages/Home/Home";
import Questions from "../User/Pages/Questions/Questions";
import QuestionsDetail from "../User/Pages/QuestionsDetail/QuestionsDetail";
import NotFound from "../User/Pages/NotFound/NotFound";
import User from "../User/User";
import Admin from "../Admin/Admin";
import Dashboard from "../Admin/Pages/Dashboard/Dashboard";
import Login from "../User/Pages/Login/Login";
import ProtectedRoute from "../Components/ProtectedRoute";
import AddQuestion from "../Admin/Pages/AddQuestions/AddQuestion";
import AdminQuestions from "../Admin/Pages/AdminQuestions/AdminQuestions";
const Routes = [
  {
    // user pages
    path: "/",
    element: <User />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "questions",
        children: [
          {
            index: true,
            element: <Questions />,
          },
          {
            path: ":id",
            element: <QuestionsDetail />,
          },
        ],
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    // admin pages
    path: "/admin",
    element: (
      <ProtectedRoute>
        <Admin />
      </ProtectedRoute>
    ),
    children: [
      {
        // path: "dashboard",
        index: true,
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: "addQuestions",
        element: (
          <ProtectedRoute>
            <AddQuestion />
          </ProtectedRoute>
        ),
      },
      {
        path: "adminQuestions",
        element: (
          <ProtectedRoute>
            <AdminQuestions />
          </ProtectedRoute>
        ),
      },
    ],
  },
];

export default Routes;