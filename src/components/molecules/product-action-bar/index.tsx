import ButtonKit from '@/components/atoms/button';
import Subtitle2 from '@/components/atoms/typography/subtitle2';
import { useProductStoreShallow } from '@/stores/useProduct';
import { Badge, Stack, useTheme } from '@mui/material';
import { ShoppingCart, Trash } from 'iconsax-react';

const ProductActionBar = () => {
  const { palette } = useTheme();
  const { selectedProducts, removeSelectedProducts } = useProductStoreShallow();

  return (
    <>
      <Stack direction="row" alignItems="center" gap={1} sx={{ cursor: 'pointer' }}>
        <ShoppingCart size="22" color={palette.primary.main} />
        <Subtitle2>Shopping List</Subtitle2>
      </Stack>
      <ButtonKit
        onClick={removeSelectedProducts}
        variant="text"
        disabled={selectedProducts.length === 0}
        color="error"
      >
        <Badge badgeContent={selectedProducts.length} color="error">
          <Trash
            size="22"
            color={selectedProducts.length > 0 ? palette.error.main : palette.grey[500]}
          />
        </Badge>
      </ButtonKit>
    </>
  );
};

export default ProductActionBar;
