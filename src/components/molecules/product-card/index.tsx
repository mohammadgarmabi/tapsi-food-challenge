import ImageKit from '@/components/atoms/image';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import { lighten } from '@mui/material';
import H6 from '@/components/atoms/typography/h6';
import { IProductResponseAction } from '@/apis/dto/product';
import { useProductStoreShallow } from '@/stores/useProduct';

const ProductCard = ({ product }: { product: IProductResponseAction }) => {
  const { setSelectedProducts, selectedProducts, setDeselectedProducts } = useProductStoreShallow();
  const isChecked = selectedProducts.includes(product.id);

  return (
    <Stack
      direction="row"
      gap={2}
      sx={{
        border: (theme) =>
          `1px solid ${isChecked ? theme.palette.primary.main : theme.palette.grey[200]}`,
        borderRadius: 3,
        bgcolor: (theme) =>
          isChecked ? lighten(theme.palette.grey['700'] as string, 0.8) : 'background.paper',
        p: 2,
        cursor: 'pointer',
        transition: 'all 0.3s ease',
      }}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        if (isChecked) {
          setDeselectedProducts(product.id);
        } else {
          setSelectedProducts(product.id);
        }
      }}
    >
      <Box
        sx={{
          border: '1px solid #e0e0e0',
          borderRadius: 2,
          p: 1,
          transition: 'all 0.5s ease',
          bgcolor: 'background.paper',
        }}
      >
        <ImageKit
          style={{ width: 45, height: 45, display: 'flex' }}
          src={product.base64Image}
          alt={product.title}
        />
      </Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center" width="100%">
        <Stack>
          <H6
          // sx={{
          //   width: '15%',
          //   overflow: 'hidden',
          //   whiteSpace: 'nowrap',
          //   textOverflow: 'ellipsis',
          // }}
          >
            {product.title}
          </H6>
        </Stack>
        <Box>
          <Checkbox
            checked={isChecked}
            onChange={(e, checked) => {
              e.preventDefault();
              if (checked) {
                setSelectedProducts(product.id);
              } else {
                setDeselectedProducts(product.id);
              }
            }}
          />
        </Box>
      </Stack>
    </Stack>
  );
};

export default ProductCard;
