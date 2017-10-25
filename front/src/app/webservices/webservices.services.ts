import { Component, OnInit, Injectable } from '@angular/core';
import { AuthenticationService } from '../authentication';
import { Router } from '@angular/router';
import { Http, Response } from '@angular/http';

@Injectable()
export class WebService {
  constructor(private authService: AuthenticationService) { }

  public getDataFromBackend() {
    return this.authService.getResource('/api/protected');
  }

  public install() {
    return this.authService.postResource({},'/api/install' );
  }
  public download() {
    return this.authService.postResource({},'/api/download' );
  }

  public isAuthenticated() {
    if (!this.authService.isAuthenticated()) {
      this.authService.clearUserDataAndRedirect();
    }
  }
}
