import {
  SecretsManagerClient,
  GetSecretValueCommand,
} from '@aws-sdk/client-secrets-manager';
import AWS_REGION from './awsConstants.js';

const client = new SecretsManagerClient({
  region: AWS_REGION,
});

const getSecret = async (secretName) => {
  let response;
  try {
    response = await client.send(
      new GetSecretValueCommand({
        SecretId: secretName,
        VersionStage: 'AWSCURRENT',
      }),
    );
  } catch (error) {
    console.error(error);
    throw error;
  }

  const secret = response.SecretString;
  return secret;
};

export default getSecret;
