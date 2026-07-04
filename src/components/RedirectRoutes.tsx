import { Navigate, useParams } from 'react-router-dom';

export function ProductRedirect() {
  const { id } = useParams();
  return <Navigate to={`/rings/${id}`} replace />;
}

export function CustomDesignRedirect() {
  return <Navigate to="/design" replace />;
}
