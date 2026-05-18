import { profile } from '../../data/portfolioData';

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} {profile.name}</p>
      <a href="#home">Back to top</a>
    </footer>
  );
}

export default Footer;
