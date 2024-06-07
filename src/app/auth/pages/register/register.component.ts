import { Component } from '@angular/core';
import { AuthFormComponent } from '../../components/auth-form/auth-form.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';
import { LegalLinksComponent } from '../../components/legal-links/legal-links.component';
import { NavigationLinksComponent } from '../../components/navigation-links/navigation-links.component';
import { ProtectedSiteMessageComponent } from '../../components/protected-site-message/protected-site-message.component';
import { SocialWrapperComponent } from '../../components/social-wrapper/social-wrapper.component';
import { LayoutComponent } from '../../../shared/layouts/auth-layout/auth-layout.component';
import { SocialNetwork, NavigationLink, ErrorMessages } from '../../models';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    AuthFormComponent,
    FooterComponent,
    HeaderComponent,
    LayoutComponent,
    LegalLinksComponent,
    NavigationLinksComponent,
    ProtectedSiteMessageComponent,
    SocialWrapperComponent,
  ],
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  public readonly socialMediaList: SocialNetwork[] = [
    {
      image: {
        url: 'google-logo.5867462c.svg',
        alt: 'Google logo',
      },
      name: 'google',
      authenticateWithSocialMedia: () => {
        console.log('Google');
      },
    },
    {
      image: {
        url: 'microsoft-logo.c73d8dca.svg',
        alt: 'Microsoft logo',
      },
      name: 'microsoft',
      authenticateWithSocialMedia: () => {
        console.log('Microsoft');
      },
    },
    {
      image: {
        url: 'apple-logo.54e0d711.svg',
        alt: 'Apple logo',
      },
      name: 'apple',
      authenticateWithSocialMedia: () => {
        console.log('Apple');
      },
    },
    {
      image: {
        url: 'slack-logo.5d730c10.svg',
        alt: 'Slack logo',
      },
      name: 'slack',
      authenticateWithSocialMedia: () => {
        console.log('Slack');
      },
    },
  ];

  public readonly navigationLinksList: NavigationLink[] = [
    {
      label: 'Already have an Atlassian account? Log in',
      routerLink: '/login',
    },
  ];

  public readonly errorMessages: ErrorMessages = {
    required: 'Please enter an email address',
    email: 'Please Enter a valid email address',
  };
}
