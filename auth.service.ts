ng// src/auth/auth.service.ts

import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  async validateUser(payload: any): Promise<any> {
    // fetching the user from a database based on the payload (user ID, username, etc.)
    const user = await this.fetchUserFromDatabase(payload.userId);
    
    // Return the user object if found, or null if not found
    return user;
  }

  private async fetchUserFromDatabase(userId: string): Promise<any> {
    //  a simple array of users is used
    const users = [
      { userId: '1', username: 'john_doe' },
      { userId: '2', username: 'jane_doe' },

    ];

    return users.find(user => user.userId === userId) || null;
  }
}
