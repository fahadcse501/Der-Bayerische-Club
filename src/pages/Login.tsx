
import React, { useState } from 'react';
import { eyeOutline, eyeOffOutline } from 'ionicons/icons';
import { useHistory } from 'react-router-dom';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton, IonItem, IonLabel, IonLoading, IonToast, IonIcon } from '@ionic/react';
import './Login.css';

 // Replace with your site
const WORDPRESS_API_URL = 'https://content.derbayerischeclub.de/wp-json/jwt-auth/v1/token';


const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const history = useHistory();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);
    try {
      const response = await fetch(WORDPRESS_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });
      const data = await response.json();
      if (data.token) {
        localStorage.setItem('jwtToken', data.token);
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false); // Hide success toast before redirect
          history.push('/home'); // Redirect to Tab1 after login
        }, 1200);
        setError(''); // Clear error immediately
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (err) {
      setError('Network error');
    }
    setLoading(false);
  };

  return (
    <IonPage>
   
      <IonContent className="login-content login-page">
        
        
        <form onSubmit={handleLogin} style={{margin: '0 auto'}}>
        <img alt="Logo" src="/logo-opening.webp" style={{ display: 'block', margin: '20px auto', maxWidth: '30%' }} />
          
          <div className='login-heading'>Login</div>
          <IonItem>
            <IonLabel position="stacked">Username or Email</IonLabel>
            <IonInput
              type="text"
              value={username}
              onIonChange={e => setUsername(e.detail.value!)}
              required
              placeholder="Enter your username or email"
            />
          </IonItem>
          <IonItem className="password-item">
            <IonLabel position="stacked">Password</IonLabel>
            <IonInput
              type={showPassword ? "text" : "password"}
              value={password}
              onIonChange={e => setPassword(e.detail.value!)}
              required
              placeholder="Enter your password"
            />
            <span
              style={{ position: 'absolute', right: 16, top: 38, cursor: 'pointer', zIndex: 2 }}
              onClick={() => setShowPassword(s => !s)}
            >
              <IonIcon
                style={{ color: '#fff', fontSize: '22px' }}
                icon={showPassword ? eyeOffOutline : eyeOutline}
              />
            </span>
          </IonItem>
          <IonButton expand="block" type="submit" style={{ marginTop: 20 }} disabled={loading}>
            Login
          </IonButton>
        </form>
        <IonLoading isOpen={loading} message={"Logging in..."} />
        <IonToast
          isOpen={!!error}
          message={error}
          color="danger"
          duration={2500}
          onDidDismiss={() => setError('')}
        />
        <IonToast
          isOpen={success}
          message="Login successful!"
          color="success"
          duration={1200}
          onDidDismiss={() => setSuccess(false)}
        />
      </IonContent>
    </IonPage>
  );
};


// Helper function for authenticated requests
export const fetchWithAuth = async (url: string, options: RequestInit = {}) => {
  const token = localStorage.getItem('jwtToken');
  const headers = {
    ...(options.headers || {}),
    Authorization: token ? `Bearer ${token}` : '',
  };
  return fetch(url, { ...options, headers });
};

export default Login;



// import React, { useState } from 'react';
// import { eyeOutline, eyeOffOutline } from 'ionicons/icons';
// import { useHistory } from 'react-router-dom';
// import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton, IonItem, IonLabel, IonLoading, IonToast, IonIcon } from '@ionic/react';
// import './Login.css';

// const WORDPRESS_API_URL = 'https://xemusk.com/wp-json/jwt-auth/v1/token'; // Replace with your site
// const WORDPRESS_REGISTER_URL = 'https://xemusk.com/wp-json/wp/v2/users'; // Replace with your site

// const Login: React.FC = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [email, setEmail] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);
//   const [isRegistering, setIsRegistering] = useState(false); // Toggle between login and register
//   const history = useHistory();

//   const handleLogin = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');
//     setSuccess(false);
//     try {
//       const response = await fetch(WORDPRESS_API_URL, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           username,
//           password,
//         }),
//       });
//       const data = await response.json();
//       if (data.token) {
//         localStorage.setItem('jwtToken', data.token);
//         setSuccess(true);
//         setTimeout(() => {
//           setSuccess(false); // Hide success toast before redirect
//           history.push('/home'); // Redirect to Tab1 after login
//         }, 1200);
//         setError(''); // Clear error immediately
//       } else {
//         setError(data.message || 'Login failed');
//       }
//     } catch (err) {
//       setError('Network error');
//     }
//     setLoading(false);
//   };

//   const handleRegister = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');
//     setSuccess(false);
//     try {
//       const response = await fetch(WORDPRESS_REGISTER_URL, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           username,
//           email,
//           password,
//         }),
//       });
//       const data = await response.json();
//       if (data.id) {
//         setSuccess(true);
//         setTimeout(() => {
//           setSuccess(false); // Hide success toast
//           setIsRegistering(false); // Switch back to login form
//         }, 1200);
//         setError('');
//       } else {
//         setError(data.message || 'Registration failed');
//       }
//     } catch (err) {
//       setError('Network error');
//     }
//     setLoading(false);
//   };

//   return (
//     <IonPage>
//       <IonContent className="login-content login-page">
//         {isRegistering ? (
//           <form onSubmit={handleRegister} style={{ margin: '0 auto' }}>
//             <div className="login-heading">Register</div>
//             <IonItem>
//               <IonLabel position="stacked">Username</IonLabel>
//               <IonInput
//                 type="text"
//                 value={username}
//                 onIonChange={(e) => setUsername(e.detail.value!)}
//                 required
//                 placeholder="Enter your username"
//               />
//             </IonItem>
//             <IonItem>
//               <IonLabel position="stacked">Email</IonLabel>
//               <IonInput
//                 type="email"
//                 value={email}
//                 onIonChange={(e) => setEmail(e.detail.value!)}
//                 required
//                 placeholder="Enter your email"
//               />
//             </IonItem>
//             <IonItem className="password-item">
//               <IonLabel position="stacked">Password</IonLabel>
//               <IonInput
//                 type={showPassword ? 'text' : 'password'}
//                 value={password}
//                 onIonChange={(e) => setPassword(e.detail.value!)}
//                 required
//                 placeholder="Enter your password"
//               />
//               <span
//                 style={{ position: 'absolute', right: 16, top: 38, cursor: 'pointer', zIndex: 2 }}
//                 onClick={() => setShowPassword((s) => !s)}
//               >
//                 <IonIcon
//                   style={{ color: '#fff', fontSize: '22px' }}
//                   icon={showPassword ? eyeOffOutline : eyeOutline}
//                 />
//               </span>
//             </IonItem>
//             <IonButton expand="block" type="submit" style={{ marginTop: 20 }} disabled={loading}>
//               Register
//             </IonButton>
//             <IonButton expand="block" fill="outline" style={{ marginTop: 10 }} onClick={() => setIsRegistering(false)}>
//               Back to Login
//             </IonButton>
//           </form>
//         ) : (
//           <form onSubmit={handleLogin} style={{ margin: '0 auto' }}>
//             <div className="login-heading">Login</div>
//             <IonItem>
//               <IonLabel position="stacked">Username or Email</IonLabel>
//               <IonInput
//                 type="text"
//                 value={username}
//                 onIonChange={(e) => setUsername(e.detail.value!)}
//                 required
//                 placeholder="Enter your username or email"
//               />
//             </IonItem>
//             <IonItem className="password-item">
//               <IonLabel position="stacked">Password</IonLabel>
//               <IonInput
//                 type={showPassword ? 'text' : 'password'}
//                 value={password}
//                 onIonChange={(e) => setPassword(e.detail.value!)}
//                 required
//                 placeholder="Enter your password"
//               />
//               <span
//                 style={{ position: 'absolute', right: 16, top: 38, cursor: 'pointer', zIndex: 2 }}
//                 onClick={() => setShowPassword((s) => !s)}
//               >
//                 <IonIcon
//                   style={{ color: '#fff', fontSize: '22px' }}
//                   icon={showPassword ? eyeOffOutline : eyeOutline}
//                 />
//               </span>
//             </IonItem>
//             <IonButton expand="block" type="submit" style={{ marginTop: 20 }} disabled={loading}>
//               Login
//             </IonButton>
//             <IonButton expand="block" fill="outline" style={{ marginTop: 10 }} onClick={() => setIsRegistering(true)}>
//               Register
//             </IonButton>
//           </form>
//         )}
//         <IonLoading isOpen={loading} message={isRegistering ? 'Registering...' : 'Logging in...'} />
//         <IonToast
//           isOpen={!!error}
//           message={error}
//           color="danger"
//           duration={2500}
//           onDidDismiss={() => setError('')}
//         />
//         <IonToast
//           isOpen={success}
//           message={isRegistering ? 'Registration successful!' : 'Login successful!'}
//           color="success"
//           duration={1200}
//           onDidDismiss={() => setSuccess(false)}
//         />
//       </IonContent>
//     </IonPage>
//   );
// };

// export default Login;



