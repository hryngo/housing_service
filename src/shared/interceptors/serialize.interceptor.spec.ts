import { SerializeInterceptor } from './serialize.interceptor';
import { Dto } from '../interfaces/dto.interface';

class ClassDto implements Dto {}

describe('SerializeInterceptor', () => {
  it('should be defined', () => {
    expect(new SerializeInterceptor(ClassDto)).toBeDefined();
  });
});
