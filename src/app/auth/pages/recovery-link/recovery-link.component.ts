import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AuthFormComponent } from '../../components/auth-form/auth-form.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';
import { LegalLinksComponent } from '../../components/legal-links/legal-links.component';
import { NavigationLinksComponent } from '../../components/navigation-links/navigation-links.component';
import { NavigationLink, ErrorMessages, LegalLink } from '../../models';
import { LayoutComponent } from '../../../shared/layouts/auth-layout/auth-layout.component';

@Component({
  selector: 'app-recovery-link',
  standalone: true,
  imports: [
    AuthFormComponent,
    FooterComponent,
    HeaderComponent,
    LayoutComponent,
    LegalLinksComponent,
    NavigationLinksComponent,
  ],
  templateUrl: './recovery-link.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecoveryLinkComponent {
  public readonly navigationLinksList: NavigationLink[] = [
    {
      label: 'Return to log in',
      routerLink: '/login',
    },
  ];

  public readonly errorMessages: ErrorMessages = {
    required: 'Please enter an email address',
    email: 'Please enter a valid email address',
  };

  public readonly legalLinksList: LegalLink[] = [
    {
      label: 'Login help',
      link: 'https://support.atlassian.com/atlassian-account/docs/troubleshoot-login-issues-with-your-atlassian-account/',
    },
    {
      label: '•',
    },
    {
      label: 'Contact Support',
      link: 'https://support.atlassian.com/',
    },
  ];
}
