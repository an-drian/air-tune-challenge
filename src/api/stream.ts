import axios from 'axios';

export async function testStreamLink(streamUrl: string): Promise<boolean> {
  try {
    const response = await axios.head(streamUrl);
    
    return response.status === 200;
  } catch (error) {
    return false;
  }
}