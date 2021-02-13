import { Route, Redirect } from 'react-router-dom';

export function IsUserRedirect({ user, loggedInPath, children, ...rest }) {
    return (
        <Route
            {...rest}
            render={() => {
                if (!user) {
                    console.log('IsUserRedirect, not true');
                    return children;
                };

                if (user) {
                    console.log('IsUserRedirect, true');

                    return (
                        <Redirect
                            to={{
                                pathname: loggedInPath
                            }}
                        />
                    );
                };

                return null;
            }}
        />
    );
};

export function ProtectedRoute({ user, children, ...rest }) {
    return (
        <Route
            {...rest}
            render={({ location }) => {
                if (user) {
                    console.log('ProtectedRoute, true');
                    return children;

                };

                if (!user) {
                    console.log('ProtectedRoute, not true');
                    return (
                        <Redirect
                            to={{
                                pathname: 'signin',
                                state: { from: location },
                            }}
                        />
                    );
                };

                return null;
            }}
        />
    );
};
