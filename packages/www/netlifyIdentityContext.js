const React =require('react') ;
const useEffect =require('react') ;
const  useState =require('react') ;
const netlifyIdentity = require('netlify-identity-widget');

const IdentityContext = React.createContext({});

exports.IdentityContext = IdentityContext

const IdentityProvider = (props) => {
    const [user, setUser] = useState();
  
    useEffect(() => {
      netlifyIdentity.init({});
  
      netlifyIdentity.on('login', (user) => {
        netlifyIdentity.close();
        setUser(user);
      });
  
      netlifyIdentity.on('logout', () => {
        netlifyIdentity.close();
        setUser();
      });
    });
  


exports.Provider = (props) => {
  return (
    <IdentityContext.Provider
      value={{ Identity: netlifyIdentity, user: undefined }}
    >
      {props.children}
    </IdentityContext.Provider>
  );
};

exports.Provider = IdentityProvider;