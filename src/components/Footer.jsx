import { Link } from 'react-router-dom';
import './footer.css';

export const Footer = () => {
	return (
		<footer>
			<div className="footer-contenido">
				<div className="logo">
					<div className="imagen-footer">
						<a href="index.html">
							<img src="/imagenes/banking-isologotipoai.png" alt="Banking Logo" />
						</a>
					</div>
					<div className="copyright">
						<p>
							&copy; 2024 Banking Inc. Todos los <br />
							derechos reservados.
						</p>
					</div>
				</div>
				<div className="enlaces">
					<h2 className="footer-titulo">LEGAL</h2>
					<Link to={'/terminos-y-condiciones'}>Términos y condiciones</Link>
					<Link to={'/politica-de-privacidad'}>Política de privacidad</Link>
				</div>
				<div className="enlaces">
					<h2 className="footer-titulo">ENLACES</h2>
					<Link to={'/transferencias'}>Transferencias</Link>
					<Link to={'/pagos'}>Pagos de facturas</Link>
					<Link to={'/solicitar-prestamo'}>Solicitar prestamo</Link>
					<Link to={'/simulador-prestamo'}>Simular prestamo</Link>
				</div>
				<div className="redes">
					<a href="https://www.facebook.com/" target="facebook">
						<img src="/iconos/icono-facebook.svg" alt="Ingresar a Facebook" />
					</a>
					<a href="https://github.com/martinisaiasabdala/Grupo-1-Sprint-2" target="github">
						<img src="/iconos/icono-github.svg" alt="Ingresar a GitHub" />
					</a>
					<a href="https://www.instagram.com/" target="instagram">
						<img src="/iconos/icono-instagram.svg" alt="Ingresar a Instagram" />
					</a>
				</div>
			</div>
		</footer>
	);
};
