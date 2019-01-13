import {html} from '@polymer/lit-element'
import {FooterStyles} from './styles';
export const AppFooter = ({appTitle}) => html`
${FooterStyles}
 <footer class="footer">${appTitle}</footer>
`