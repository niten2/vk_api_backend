import "jest-enzyme"
import { configure } from "enzyme"
import * as Adapter from "enzyme-adapter-react-16"
import LocalStorageMock from "src/test/support/local_storage"

configure({ adapter: new Adapter() })

global.localStorage = new LocalStorageMock
