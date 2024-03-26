import { Dto } from '../interfaces/dto.interface';
import { SerializeInterceptor } from './serialize.interceptor';

class ClassDto implements Dto {}

describe('SerializeInterceptor', () => {
  it('should be defined', () => {
    expect(new SerializeInterceptor(ClassDto)).toBeDefined();
  });
});
