import { alpha, Button, styled } from "@mui/material";

export const CobraIconButton = styled(Button)(({ theme }) => ({
	borderRadius: 999,
	color: theme.palette.primary.contrastText,
	display: 'flex',
	height: 32,
	textTransform: 'none',
	minWidth: 32,
	width: 32,
	'&:hover': {
		background: theme.palette.primary.main,
	},
	'&:active': {
		background: theme.palette.linkButton.dark
	},
	'&.increment': {
		order: 1
	},
	"&.Mui-disabled": {
		background: theme.palette.primary.light,
		color: theme.palette.primary.dark
	}
}));