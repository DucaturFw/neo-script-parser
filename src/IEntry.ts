export interface IEntry
{
	opcode: number
	pos: number
	name: string
	comment: string
	data?: Buffer
	hex?: string
	int?: number
}
export default IEntry