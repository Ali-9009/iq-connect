import { motion } from "framer-motion";
import { ShieldCheck, Headphones, Cpu } from "lucide-react";

const points = [
  {
    icon: <Headphones size={26} />,
    title: "Dedicated Telecom Experts",
    desc: "Every iQ Connect client gets a dedicated support expert who understands telecom not a generic helpdesk. When something comes up, you talk to someone who already knows your operation.",
  },
  {
    icon: <ShieldCheck size={26} />,
    title: "99.9% Uptime. No Excuses.",
    desc: "Redundant infrastructure with built-in failover ensures your activations and billing stay live because downtime isn’t an option.",
  },
  {
    icon: <Cpu size={26} />,
    title: "No Custom Development Required",
    desc: "Pre-integrated with AT&T, T-Mobile, and Verizon MVNO programs. You’re not starting from scratch you’re starting from ready.",
  },
];

export default function WhyIQConnect() {
  return (
    <section className="py-12 section">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <h2 className="secondary-heading">
            What Makes iQ Connect Different
          </h2>

          <p className="para1 mb-10">
            You don’t just get software. You get a team.
          </p>

          <div className="space-y-8">
            {points.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex gap-4 items-start"
              >
                <div className="min-w-12 h-12 flex items-center justify-center rounded-xl bg-linear-to-br from-purple-100 to-blue-100 text-purple-600">
                  {item.icon}
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT VISUAL CARDS */}
        <div className="grid gap-6">
          
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-linear-to-br from-purple-50 to-blue-50 border border-gray-200 rounded-2xl p-6 shadow-sm"
          >
            <h4 className="text-sm text-gray-500 mb-2">Support</h4>
            <p className="text-2xl font-bold text-gray-900">
              Real Humans. Real Help.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-linear-to-br from-green-50 to-emerald-50 border border-gray-200 rounded-2xl p-6 shadow-sm"
          >
            <h4 className="text-sm text-gray-500 mb-2">Infrastructure</h4>
            <p className="text-2xl font-bold text-gray-900">
              99.9% Uptime Guaranteed
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-linear-to-br from-blue-50 to-indigo-50 border border-gray-200 rounded-2xl p-6 shadow-sm"
          >
            <h4 className="text-sm text-gray-500 mb-2">Setup</h4>
            <p className="text-2xl font-bold text-gray-900">
              Launch Without Dev Work
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}