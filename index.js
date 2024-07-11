/**
 * yaw - Self-hosted Git server
 */
class Git {
  constructor(options){
    this.options = options;
    this.git = require('simple-git')(this.options.path); // usage: git.add('file.txt');
    this.def_options = {
      path: process.cwd(),
      port: 8080,
      data: {
        users: {
          admin: {
            password: 'admin',
            name: 'Admin',
            email: 'plsgq@example.com'
          }
        }
      }
    }
    for(let key in this.def_options){
      if(this.options[key] === undefined){
        this.options[key] = this.def_options[key];
      }
    }
    this.users = this.options.data.users;
    
  }
  web(){
    const express = require('express');
    const app = express();
    const bodyParser = require('body-parser');
    const fs = require('fs');
    const path = require('path');
    const http = require('http');
    const https = require('https');
    const crypto = require('crypto');
    // if users using http://, notify them to use https://
    
  }
} 