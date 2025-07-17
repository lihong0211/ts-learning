// 基础类型示例
export function basicTypes() {
  // 布尔值
  let isDone: boolean = false
  
  // 数字
  let decimal: number = 6
  let hex: number = 0xf00d
  
  // 字符串
  let color: string = "blue"
  
  // 数组
  let list: number[] = [1, 2, 3]
  let genericList: Array<number> = [1, 2, 3] // 泛型语法
  
  // 元组
  let tuple: [string, number] = ["hello", 10]
  // tuple = [10, "hello"] // 错误: 类型不匹配
  
  return { isDone, decimal, hex, color, list, genericList, tuple }
}