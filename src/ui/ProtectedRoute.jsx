/* eslint-disable react/prop-types */
import styled from 'styled-components';
import { useUser } from './../features/authentication/useUser';
import Spinner from './Spinner';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  justify-content: center;
  align-items: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  // 1. load authenticated user
  const { isAuthenticated, isLoading } = useUser();

  // 2. If there is no authenticated user, redirect to login page
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) {
        navigate('/login');
      }
    },
    [isAuthenticated, isLoading, navigate]
  );

  // 3. while happening, show spinner
  if (isLoading) {
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );
  }

  // 4. If there is authenticated user, render app
  if (isAuthenticated) {
    return children;
  }
}

export default ProtectedRoute;
