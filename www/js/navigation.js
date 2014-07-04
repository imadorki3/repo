/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

document.getElementById('button1').onclick = function() {
	    if (window.getComputedStyle(button1).backgroundColor == "rgb(58, 58, 58)") {
	    	button1.style.backgroundColor="#3198DA";
	    	button2.style.backgroundColor="#3A3A3A";
	    	button3.style.backgroundColor="#3A3A3A";
	}
}

document.getElementById('button2').onclick = function() {
	    if (window.getComputedStyle(button2).backgroundColor == "rgb(58, 58, 58)") {
			button1.style.backgroundColor="#3A3A3A";
			button2.style.backgroundColor="#3198DA";
			button3.style.backgroundColor="#3A3A3A";
	}
}

document.getElementById('button3').onclick = function() {
	    if (window.getComputedStyle(button3).backgroundColor == "rgb(58, 58, 58)") {
			button1.style.backgroundColor="#3A3A3A";
			button2.style.backgroundColor="#3A3A3A";
			button3.style.backgroundColor="#3198DA";
	}
}

