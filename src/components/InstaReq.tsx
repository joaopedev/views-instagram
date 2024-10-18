import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface InstagramUser {
  id: string;
  username: string;
}

const InstagramUserInfo: React.FC = () => {
  const [user, setUser] = useState<InstagramUser | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // O token de acesso deve ser substituído por um válido
    const accessToken = '86d2b7c0e240df2e62a73047e07da50a';

    const fetchInstagramUser = async () => {
      try {
        const response = await axios.get(
          `https://graph.instagram.com/me?fields=id,username&access_token=${accessToken}`
        );
        setUser(response.data);
        console.log(response.data)
      } catch (err) {
        setError('Erro ao obter dados do Instagram');
        console.error(err);
      }
    };

    fetchInstagramUser();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {user ? (
        <div>
          <h3>Instagram User Info</h3>
          <p>ID: {user.id}</p>
          <p>Username: {user.username}</p>
        </div>
      ) : (
        <p>Carregando dados...</p>
      )}
    </div>
  );
};

export default InstagramUserInfo;
