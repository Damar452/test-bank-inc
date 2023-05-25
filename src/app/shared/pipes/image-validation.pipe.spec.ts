import { ImageValidationPipe } from './image-validation.pipe';

describe('ImageValidationPipe', () => {
  it('create an instance', () => {
    const pipe = new ImageValidationPipe();
    expect(pipe).toBeTruthy();
  });
});
