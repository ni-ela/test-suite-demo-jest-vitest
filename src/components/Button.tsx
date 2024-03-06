import { Button } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { MouseEventHandler } from 'react';

interface PageButtonProps {
	href: string;
	children: React.ReactNode;
	icon?: React.ReactElement;
	onClick?: MouseEventHandler;
	bg?: string;
	color?: string;
	hoverColor?: string;
}

const PageButton: React.FC<PageButtonProps> = ({
	href,
	children,
	icon,
	onClick,
}) => {
	const router = useRouter();
	const isActive = router.pathname === href;

	return (
		<Link href={href} passHref scroll={false} legacyBehavior>
			<Button
				w="100%"
				overflow="hidden"
				whiteSpace="nowrap"
				textOverflow="ellipsis"
				py={[2, 7]}
				leftIcon={icon}
				justifyContent={'start'}
				bg={isActive ? 'blueDark.700' : 'blueDark.900'}
				color="gray.50"
				_hover={{
					color: 'gray.200',
					bg: 'blueDark.700',
				}}
				onClick={onClick}
			>
				{children}
			</Button>
		</Link>
	);
};

const ButtonHeader: React.FC<PageButtonProps> = ({
	bg,
	color,
	children,
	icon,
	hoverColor,
	onClick,
}) => {
	return (
		<Button
			w={['full', '150px']}
			py={7}
			leftIcon={icon}
			fontWeight="400"
			justifyContent={['start', '']}
			onClick={onClick}
			bg={bg}
			color={color}
			_hover={{
				bg: { hoverColor },
			}}
		>
			{children}
		</Button>
	);
};

export { ButtonHeader, PageButton };

