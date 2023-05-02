import { Client } from '@notionhq/client';
import { config as dotenvInitConfig } from 'dotenv';

dotenvInitConfig();

class NotionClient {

  private readonly client: Client;
  private readonly notionKey: string;
  private readonly databaseId: string;

  constructor() {
    this.notionKey = process.env.NOTION_API_KEY as string;
    this.databaseId = process.env.DATABASE_KEY as string;
    this.client = new Client({
      auth: this.notionKey,
    });
  }

  public getApis() { return { ...this.client };  }

  public getNotionKey() { return this.notionKey; }

  public getDatabaseId() { return this.databaseId; }

}

export default new NotionClient();
